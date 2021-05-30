function add(){
    window.location.href = "/add";
};
Array.from(document.getElementsByClassName("upd_admin")).forEach(i=>{
    i.onclick = function(){
        id = this.getAttribute("data_id");
        console.log(id);
        window.location.href="/text/add?id="+id;
    }
})