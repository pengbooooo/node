$(function(){
    $("#nextPage").click(function(){
        $.ajax({
            type:"post",
            url:"/nextpage",
            success:function(data){
                console.log(data);
                document.getElementById("showdata").innerHTML = data.map((i,ind) => `<tr>
                <td>${i.name}</td>
                <td>${i.ch}</td>
                <td>${i.ma}</td>
                <td>${i.en}</td>
                <td>${i.am}</td>
                <td>
                    <button data-id=${ind} class="mod-btn">修改</button>
                    <button data-id=${ind} class="del-btn">删除</button>
                </td>
            </tr>`).join("");
            }
        })
    })
});