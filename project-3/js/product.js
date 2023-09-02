import { drawProduct } from "./drawProduct.js";
import {
  buttonSearch,
  filter,
  inputSearch,
  pagiNext,
  pagiNumber,
  pagiPrev,
  params,
} from "./variable.js";

drawProduct();

// Search (Đã export qua sang variable.js)
// const inputSearch = document.querySelector("#search input");
// const buttonSearch = document.querySelector("#search button");

const search = () => {
  params.q = inputSearch.value;
  drawProduct();
};

buttonSearch.addEventListener("click", function () {
  // console.log(inputSearch.value);
  search();
});

inputSearch.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    // console.log("Search");
    search();
  }
});
// End Search

// Filter (Đã export qua sang variable.js)
// const filter = document.querySelector("#filter");

filter.addEventListener("change", function (e) {
  // console.log(e.target.value);
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "gia-cao-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    default:
      break;
  }
  drawProduct();
});
// End Filter

// Pagination (Đã export qua sang variable.js)
// const pagiPrev = document.querySelector("#paginationPrev");
// const pagiNext = document.querySelector("#paginationNext");
// const pagiNumber = document.querySelector("#paginationNumber");

pagiNext.addEventListener("click", function () {
  params.page += 1;
  pagiNumber.innerHTML = params.page;
  drawProduct();
});

pagiPrev.addEventListener("click", function () {
  if (params.page > 1) {
    params.page -= 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
  }
});
// End Pagination
