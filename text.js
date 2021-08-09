window.onload = function() {
    var why
    var newColor
    function onGot(textfile)
    {
        const tumtum = document.getElementById("output")
        var pie = textfile.split("\n")
        //console.log(pie)
        for(var i = 0; i < pie.length; i++)
        {
            if(pie[i] == "BREAKROW")
            {
                var linebreaker = document.createElement('p')
                linebreaker.textContent = "-----------"
                tumtum.append(linebreaker) //might just do two br's or something
            }
            else
            {
                const link = document.createElement('a')
                var shroom = pie[i].split(" ")
                link.href = shroom[1]
                link.target = "_blank"
                link.textContent = shroom[0]
                link.classList.add("link")
                tumtum.append(link)
                tumtum.append(document.createElement('br'))
            }
        }
        var links = document.getElementsByClassName("link")
        for(i = 0; i < links.length; i++)
        {
            links[i].style.color = newColor
        }
    }

    function error(error)
    {
        console.log("sadge")
    }
    function whyJS(whyyy)
    {
        why = whyyy[0].textfile + whyyy[1].tabs
        onGot(why)
    }
    function updateColor(xd)
    {
        newColor = xd.color
        Promise.all([
            browser.storage.sync.get("textfile"),
            browser.storage.sync.get("tabs")
        ]).then(whyJS, error)
    }

    let color = browser.storage.sync.get("color")
    color.then(updateColor, error)
}
