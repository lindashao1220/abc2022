function guess(){
    let content = document.getElementById("input").value;
    console.log(content);
    let link = "/guess?name=" + content;
    console.log(link);
    window.location.href = link;
  }

