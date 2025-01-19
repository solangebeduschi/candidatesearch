// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  experience: number;
  skills: string[];
  status: string;
}


import React from "react";
import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => (
  <div>
    <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
    <h2>{candidate.name}</h2>
    <p>Username: {candidate.username}</p>
    <p>Location: {candidate.location ?? "Not specified"}</p>
    <p>Email: {candidate.email ?? "Not provided"}</p>
    <p>Company: {candidate.company ?? "Not specified"}</p>
    <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
      GitHub Profile
    </a>
  </div>
);

export default CandidateCard;