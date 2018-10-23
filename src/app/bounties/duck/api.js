import http from '../../../utils/http';

const root = '/api/bounties';

// Bounty / Create
export function createBounty (payload) {
  return http.put(`${root}`, payload);
}

// Bounty / List (all)
export function listBounties () {
  return http.get(root);
}

// Bounty / List (mine)
export function listBountiesMine () {
  return http.get(`${root}/mine`);
}

// Bounty / Show
export function showBounty (payload) {
  return http.get(`${root}/${payload.id}`);
}

// Bounty / Update
export function updateBounty (payload) {
  return http.put(`${root}/${payload.id}`, payload);
}

// Bounty / Open
export function openBounty (payload) {
  return http.put(`${root}/${payload.id}/open`, payload);
}

// Bounty / Enrollments / List
export function listBountyEnrollments (payload) {
  return http.get(`${root}/${payload.id}/enrollments`);
}

// Bounty / Enrollments / Create
export function createBountyEnrollment (payload) {
  return http.post(`${root}/${payload.id}/enrollments`, payload);
}
