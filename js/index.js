const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );

  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadInfos('${category.category_id}')" class="btn join-item rounded bg-gray-200 text-black normal-case text-xl"
            >${category.category}</a
         
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
  if (data.data.length === 0) {
    const div = document.createElement("div");
    div.innerHTML = `
          <section class="container mx-auto h-screen flex flex-col justify-center items-center">
  <div class="text-center justify-center items-center ">
    <img src="images/Icon.png" alt="">
    <h1>Oops!! Sorry, There is no content here</h1>
  </div>
</section>

        `;
    cardContainer.appendChild(div);
  } else {
    data.data?.forEach((infos) => {
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="mt-6 card grid grid-cols-1 bg-base-100 shadow-xl">
        <figure>
          <img
            src="${infos?.thumbnail}"
          />
        </figure>
        <div class="card-body">
         <div class="flex gap-2">
           <img class="profile-picture" src="${
             infos?.authors[0]?.profile_picture
           }" />
          <h2 class="card-title text-base font-bold">
            ${infos?.title}
          </h2>
          <p></p>
          
          </div>
          <div class="">
            <small  class="text-base font-sm">${
              infos?.authors[0]?.profile_name
            }</small>  
            <div class="badge ">${
              infos?.authors[0]?.verified === true
                ? '<div class="badge"><img src="images/fi_10629607.svg" alt=""></div>'
                : ""
            }</div>
          </div>

          <div class="card-actions justify-start">
            <div class="badge badge-outline text-base font-sm">${
              infos?.others?.views ? infos?.others?.views : "no views"
            } Views</div>
          </div>
        </div>
      </div>
        `;
      cardContainer.appendChild(div);
      //console.log(data.data);
      //console.log(data.data);
    });
  }

  //console.log(data.data);
};
function goToIndex() {
  window.location.href = "index.html";
}

handleCategory();
handleLoadInfos("1000");
