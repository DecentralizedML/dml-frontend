import http from "../../../utils/http";

const root = "/api/algorithms";

// Algorithm / Create
export function createAlgorithm(payload) {
  return http.post(root, payload);
}

// Algorithm / List (published) (all)
export function listAlgorithms() {
  return http.get(root);
}

// Algorithm / List (mine)
export function listUserAlgorithms() {
  return http.get(`${root}/mine`);
}

// Algorithm / Show
export function showAlgorithm(payload) {
  return http.get(`${root}/${payload.id}`);
}

// Algorithm / Update
export function updateAlgorithm(payload) {
  return http.put(`${root}/${payload.id}`, payload);
}

// Algorithm / Download
export function downloadAlgorithm(payload) {
  return http.get(`${root}/${payload.id}/download`);
}
