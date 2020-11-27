var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        // document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML ='<br><label class="label">Link da Imagem</label>'+
            '<br><div class="alert alert-success" role="alert"   type="list" >'+ get_link + '</div>'+
            '<label class="label">Insira o link gerado no campo abaixo</label>';

    }

};

new Imgur({
    clientid: '765d31a1db0a874', //You can change this ClientID
    callback: feedback
});
