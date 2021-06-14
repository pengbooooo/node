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
Array.from(document.getElementsByClassName("upd_delete")).forEach(i=>{
    i.onclick = function(){
        id = this.getAttribute("data_id");
        console.log(id);
        window.location.href="/text/delete?id="+id;
    }
})
Array.from(document.getElementsByClassName("upd_comment_delete")).forEach(i=>{
    i.onclick = function(){
        id = this.getAttribute("data_id");
        console.log(id);
        window.location.href="/text/comment?id="+id;
    }
})
Array.from(document.getElementsByClassName("upd_comment_delete")).forEach(i=>{
    i.onclick = function(){
        id = this.getAttribute("data_id");
        console.log(id);
        window.location.href="/text/comment?id="+id;
    }
})
// var name = document.getElementById("username").value;

