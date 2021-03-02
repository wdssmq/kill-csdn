const arrHost = ["www.csdn.net", "blog.csdn.net"];

location.host === "www.google.com" && fnMain("div.g", arrHost);
location.host === "cn.bing.com" && fnMain("li.b_algo", arrHost);

function $n(e, dom = document) {
  return dom.querySelector(e);
}

function $na(e, dom = document) {
  return dom.querySelectorAll(e);
}

function fnMain(selector, blockList) {
  const $elList = $na(selector);
  const regBlock = RegExp(blockList.join("|"), "i");
  $elList.forEach(($item) => {
    const iteHtml = $item.innerText;
    if (regBlock.test(iteHtml)) {
      $item.style.display = "none";
    }
  });
}
