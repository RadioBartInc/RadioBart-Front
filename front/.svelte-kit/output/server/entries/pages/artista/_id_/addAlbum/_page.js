import { e as error } from "../../../../../chunks/index.js";
function load({ params }) {
  if (params.id) {
    return {
      id: params.id
    };
  }
  error(404, "Not found");
}
export {
  load
};
