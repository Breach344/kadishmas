//let original = document.getElementById('test');

//let replaced = document.getElementById('test').replaceAll(/'the'/gi, "TEST");

//let og = document.getElementById('test');

//console.log(document.getElementById('test').innerHTML);

/*function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;
    if (inputText.indexOf("<a ")) {
      //URLs starting with http://, https://, or ftp://
      replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
      replacedText = inputText.replace(replacePattern1, '<div contentEditable="false" style="display: inline-block; padding: 5px;"><a href="$1" target="_blank">$1</a></div>');
  
      //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
      replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      replacedText = replacedText.replace(replacePattern2, '$1<div contentEditable="false" style="display: inline-block; padding: 5px;"><a href="http://$2" target="_blank">$2</a></div>');
  
      //Change email addresses to mailto:: links.
      replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
      replacedText = replacedText.replace(replacePattern3, '<div contentEditable="false" style="display: inline-block; padding: 5px;"><a href="mailto:$1">$1</a></div>');
    } else {
      replacedText = inputText;
    }
    alert(replacedText)
    return replacedText;
  }*/



  /*const linkify = t => {
    const isValidHttpUrl = s => {
      let u
      try {u = new URL(s)}
      catch (_) {return false}
      return u.protocol.startsWith("http")
    }
    const m = t.match(/(?<=\s|^)[a-zA-Z0-9-:/]+\.[a-zA-Z0-9-].+?(?=[.,;:?!-]?(?:\s|$))/g)
    if (!m) return t
    const a = []
    m.forEach(x => {
      const [t1, ...t2] = t.split(x)
      a.push(t1)
      t = t2.join(x)
      const y = (!(x.match(/:\/\//)) ? 'https://' : '') + x
      if (isNaN(x) && isValidHttpUrl(y)) 
        a.push('<a href="' + y + '" target="_blank">' + y.split('/')[2] + '</a>')
      else
        a.push(x)
    })
    a.push(t)
    return a.join('')
  }
  document.querySelectorAll('.linkify-this').forEach(o => {
    o.innerHTML = linkify(o.innerHTML)
  })*/