import S01E00 from './posts/S01E00.jpeg'
import S01E01 from './posts/S01E01.jpeg'
import S01E02 from './posts/S01E02.jpeg'

import TS01E00 from './transcription/S01E00.txt'
import TS01E01 from './transcription/S01E01.txt'
import TS01E02 from './transcription/S01E02.txt'

const assets = {
    images: {
        cover : {
            S01E00,
            S01E01,
            S01E02
        }
    },
    transcriptions: {
        S01E00: {
            title:'Episodio Piloto - PodCast',
            txt: TS01E00
        },
        S01E01: {
            title:'Episodio #01: Nuestra relación con los animales',
            txt: TS01E01
        },
        S01E02: {
            txt: TS01E02
        }
    }
}

export default assets