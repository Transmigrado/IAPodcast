
import diego from '../assets/diego.png'
import jorge from '../assets/jorge.jpg'
import samuel from '../assets/samuel.png'
import luis from '../assets/luis.png'
import pablo from '../assets/pablo.png'

const symbol = ["h","m","s"]
const photo = {
    diego,
    jorge,
    samuel,
    luis,
    pablo
}

export const txtToArray = txt => {
    return txt.split("\n").map( e => {
        
        
        const time = e.substring(0,10)
        const c = e.substring(10, e.length).split(':')
        const name = c.shift().replace(' ', '')
       
        console.log('->', photo[`${name.toLowerCase()}`])
        return {
            time: time.replace(/(\[)|(\])/g,'').split(':').map((e,i) => `${e} ${symbol[i]}`).join(' '),
            name,
            avatar: photo[name.toLowerCase()],
            txt: c.join(" ")
        }
    })
}