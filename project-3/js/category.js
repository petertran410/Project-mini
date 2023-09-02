import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";

// Đã được export sang varible.js
// const category = document.querySelector("#category");

fetchApi(API_CATEGORY).then((data) => {
  // console.log(data);
  let htmls = data.map((item) => {
    return `
        <div class="category__item" data-category="${item}">
          ${item}
        </div>
      `;
  });

  category.innerHTML = htmls.join("");
  // console.log(htmls.join(""));

  const listCategory = document.querySelectorAll("#category .category__item");
  // console.log(listCategory);

  listCategory.forEach((item) => {
    item.addEventListener("click", function () {
      // params.category = item.innerText; (Cách 1 để lấy data)
      // params.category = item.dataset.category; (Cách 2 để lấy data)
      params.category = item.getAttribute("data-category");
      // console.log(params);
      drawProduct();
    });
  });
});
