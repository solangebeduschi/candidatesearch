import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const getSavedCandidates = (): Candidate[] => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  };

  const saveCandidate = (candidate: Candidate) => {
    const candidates = getSavedCandidates();
    candidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(candidates));
  };

  const searchForSpecificUser = async (user: string) => {
    const data: Candidate = await searchGithubUser(user);
    setCurrentUser(data);
  };

  const searchForUsers = async () => {
    const data: Candidate[] = await searchGithub();
    if (data.length === 0) {
      setResults([]);
      setCurrentUser({
        id: null,
        login: null,
        email: null,
        html_url: null,
        name: 'No candidates available',
        bio: null,
        company: null,
        location: null,
        avatar_url: null,
      });
      return;
    }
    setResults(data);
    await searchForSpecificUser(data[0].login || '');
  };

  const makeDecision = (isSelected: boolean) => {
    if (isSelected) saveCandidate(currentUser);

    setCurrentIdx((prevIdx) => {
      const nextIdx = prevIdx + 1;
      if (nextIdx < results.length) {
        searchForSpecificUser(results[nextIdx].login || '');
        return nextIdx;
      } else {
        searchForUsers();
        return 0;
      }
    });
  };

  useEffect(() => {
    searchForUsers();
  }, []);

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard currentUser={currentUser} makeDecision={makeDecision} />
    </>
  );
};

export default CandidateSearch;
