const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );

  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
         <a onclick="handleLoadInfos('${category.category_id}')" class="tab">${category.category}</a>
        `;
    tabContainer.appendChild(div);
  });
  //console.log(data.data);
};

const handleLoadInfos = async (categortId) => {
  //console.log(categortId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categortId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data?.forEach((infos) => {
    const div = document.createElement("div");
    div.innerHTML = `
         <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="${infos?.thumbnail}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ${infos?.title}
          </h2>
          <p>${infos?.category_id}</p>
          <div class="">
            
            <div class="w-14 rounded-full">NEW
                <img
            src="${infos?.authors?.profile_picture}"
            
          />
          <p>${data.data?.authors?.profile_name}</p>
            </div>
          </div>
          <div class="">
            
            <div class="badge badge-secondary">NEW</div>
          </div>

          <div class="card-actions justify-start">
            <div class="badge badge-outline">${infos?.others?.views}</div>
          </div>
        </div>
      </div>
        `;
    cardContainer.appendChild(div);
    console.log(data.data);
  });
  //console.log(data.data);
};
handleCategory();
handleLoadInfos("1000");
