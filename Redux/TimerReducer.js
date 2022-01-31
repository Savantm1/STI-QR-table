import { createSlice } from "@reduxjs/toolkit"

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        hash_array : [
            "N7B4NBudnjaUQBdzi6tfpACLUwcJKucm",
            "STIP494aq9vpQykFyLfRN5jh2jc0eX7V",
            "omwuihPPx5zCDNZ2JYDO4Xr5nbbvADgo",
            "U44SNhKlOqswkV4dEowMSfLg2hiMGow8",
            "Xp3S2YPmR6euK3pEKGii7MCac9wShx74",
            "xyl5DhNaI0yyfQGQE84K4GvrR1VjIMit",
            "3kcj2DXB1CBcGzG0Vr1SNX7sCetAjM22",
            "3zJOPZ7avbxznI8ISPyQNvbXYYeUOs1G",
            "MMzmNHt2a9SJxgHyyuiam1lR5GzGVMBh",
            "pPvQvjTtjlcs2nkmShgzkS3c6Nm21lNw",
            "BXJwtpSyaP5kNmj3IhX0KcJ9lhzXTe8W",
            "k9adlPknIGukhFl8gwpt4ZiYSMctxSOp",
            "mPd3FDjpQHmhzbHZvDHHwroh8eTINLre",
            "rshVMB1YdEzNNvhZJe4nZJRfsKYqU6u0",
            "Ws5WYwH78zAKE0VdkmjQhLcQoNNeYFe9",
            "BOdb7ZpYYFB6Z46SpGxOldGm7ZMhTXnU",
            "7UT9rxfdbAt4G5qZhHQbmANgxgGdq3FR",
            "Nn0vPRjTCs1nqrnddAtrdS6dS4GpiYJH",
            "82lxOB2lEMqnuWqOuc72erniijLkGSsZ",
            "Fd27xn88jhNvpYQbeWpsc65zYvTCrSgx",
            "PklqpDPRnrKFM93KOWIQVXUyKAnPSxJq",
            "6TQpVrcCiCHYNX2m6rQ9uzsHlDEzcNIG",
            "3B8yvxupnJBio2s5IYZNUPfaMbL90MKq",
            "FeHlOsMZpzwPM5SAH1YZF4nxMZZIO9SY",
            "iPZvqdVQopbBLftK20lEN0vKGuc75gVs",
            "R3f7lOnZUBtdD8L1eXKLLI0BPvQeXexc",
            "1MKQduONeRgTIJOoOyuSqm7ZPLSv47RK",
            "hIsiH6YN9Efxe7ie7tedazPf22csZZNN",
            "5NiRv29IFnjVnQ5Bz3opvn0gDoUo2CS9",
            "r6v7EXVph1cHJFGBEU67Sf9Gg2nrHqgN",
            "NT3T0C4LstoU9NfRL5bYEWCwLb3Jtyuv",
            "zflDYS6CirbGmR296UXeG6UNHINL1bS0",
            "2b49XHvJOaazCEeHzwvo6j00TV5t846f",
            "IDIGN1amE4OKaTN5UbCx2dmilr1bNLRA",
            "eLwApF3fnpExeUQPoqMKahkC8v1zREjj",
            "sJoFJA4BIyazsnbwyTCRZ4ji2YUoFcub",
            "idllegmtAcQ1GG4RjKmDlArooys5AcAG",
            "qne5yHMQKx33dDq6Udxwf1KlxruO3faA",
            "gxTxW9b6YuLdbeEzeDSuaYr97PIgWNeO",
            "EOrTZHsApNBonFHJAjj6WUmGLubrFDdg",
            "E4DAVepDF3ZvrepkqF401zttLtrdzxiP",
            "gsAL0EvErLsWqXOY12IGaxLxRIAjO7YN",
            "Fg2XcjxbIzDLc3R556FDWEir6qRdrBJg",
            "zqzAQuff7gTDFnFMpttfJIQLpO7FF0NI",
            "cdgqsxzTL1CiaiRtFP7z2TKYInf9LTY4",
            "5liqtJ8k6MKcfWXF6Kka53WZkcU0nNz7",
            "StZxgRtqDElVjy2NzT5uaD29aCyp4Ayr",
            "7kRIhcHSwZgg2W0JwcZqS7rQep3ED3fE",
            "G91Dupd1isTe2yrim6PHn19fUpBdAg07",
            "V1L1t1bMeH9zsL0BPJ7K2ceFE59oB4j5",
            "StW8SqcLbFpxL4Vmk9UnBNn9aYvAVBxU",
            "q9n6bXPi0X1sngCymL16XijThtCQ79Ke",
            "yo0ORNy97HrK7urTC4xTvLKjkyb6Qtzm",
            "fpEjW3YTpfScJEmAurmaj2gn78zAOAua",
            "bkYcLqrGBWFWfKzJkxURkGeRCQEoXRGn",
            "Xq7gDTPKFq6aeA7WhHoXUaPQY5ez46NH",
            "VSFYNDjOyjY8EZrH1eAeVOhdoI4azgfp",
            "G7hQteXIldZOSxmjPSWcV3ZzymY2zRlO",
            "xgzGPrsxYSs564SO3YyrcpkFv2PjzbrG",
            "faW5YF4dzKPVGKlu5tEOHJpn1QbKgnfw",
            "We2raNNBDs9teMwb3AD8iks5nYs7Qjne",
            "r2VMqZyUNi3FBPmEBZQUYG7m4LY8HI1k",
            "jeVDpvEGgO3B616XohvOPvdy5Rr1TdEn",
            "4UG4Mo6gih6CMrS31ITcJATsCvl0LOW2",
            "vgd1SGBOqLlV5Te0k4rS5FhL9ICR37QC",
            "ykyG775rp7q3rFDiRdSmf071yZqM5L0l",
            "3URgunVCbh4w6Z5xjgwOZvdcJbn3hNvc",
            "vKu3lrmP5FQbeeUdjGbhXESW6McUfEjc",
            "dqjoSLeCQ3jFco65J5sGP2mhS0vPQNXH",
            "260CghAxd1AThfx7ulk4I349vrGmwGFi",
            "TPS1EeYy3SlVKDPlbWYCh3SPT4KHfBAi",
            "Pn6YBrtONFRfucWdzTRdo70Hkl8o5HuN",
            "bxEjNvpS59omBF7yCf95oP1Or57v9pcc",
            "OAlv7HgYjXAQ8LFpnVETviW5KiKDYcxn",
            "Pe37FyFYCUCsjFBmww7nxlXLIKhJlFfV",
            "m7wJ3L5OJLWiAnUzyMYoHKMZLx5nrxIa",
            "iRQVu5v3hUGaaQJeAHan0b6DO2rgoLpZ",
            "iYH0ZvCuXL09sXozBpfrVQLvkoom1tXP",
            "7KO0EPm32wsHiSawg6bxdcOkfkOH8uBi",
            "SZw4nAWufxBQUb9zogflpJIifT7aBHKE",
            "FNBsijYF8gpsytKgnOq64bVdPeaTqttg",
            "pUUImYHTYvNDQrc96Jl79wrxVr1Z30jT",
            "UhQWL0F3hD20Vdrg5UAaoNtQJ3apedym",
            "Msd7OxgHF1l1krbNYw3pQLh7HS7LvuhF",
            "u6ytzNEze9sDouRlH0afLvwdp2KZ4AqH",
            "jNSpsCUhlQOifsPZHqwgf7tiKkeUl1eO",
            "oUgPDeR00dXZHe5l0661OIthNJKzo94q",
            "b3LRIWFyuWS45mNaxIjRzOprSql8bmw8",
            "elqddP3hf1dSS8ssDCthFKuHzg0zMrfl",
            "MSlVuWmCQUnkIUvXrzY57Fm9gQLNRssf",
            "O8AejhDfYcPj1dIRrUbU3bwW8VGChPXW",
            "LQVzA9y0LSUMHBTB32VweiV0PDPsRtPx",
            "Kb4ry102HL2XWDDD3QziZlvSuou3sHIU",
            "6i82jf0StBYAuIggJ6fRMXbx9oQUuEcA",
            "nQsUerNjMvVcH1Fhio73umdjel9MFHBp",
            "Ry0jZZlx8PjuxLPahHbiVzbGFEhQUFCw",
            "ZVpfhZlUMHyjlbWAjeeTUNf7rjKnbrPI",
            "g2QSzyL4tzYIkYvJNJtOFLoyRNA1Urv5",
            "muX6yoqCPh0JjRBb8A1thCrU3PRWAZGU",
            "bKTc6EX9B61qS3t3DuyNnJ4tkyf2E5jr",
            "IZkbszRqIiQc6DaN2OjrJun0DGCAo91k",
            "birApjt0l8Ho4QGLBpurK7zjcM9sU7n0",
            "Nauzu5ZGWLPSRE2yNqoP91i3nKikLdUj",
            "q5SxHgpCv1bJFcsqRN60BomcQK0f8Pgy",
            "H9MpFACFoyjxflWFLXJdFnBcJtCc2wnz",
            "B6spoAlpafBeXqK9hCFYrCHrYnEKj32X",
            "HqDcAbF3ahrkLBlhdNKf2zW2ukt9QOjg",
            "g4H9MQxrig4I4YfmciVGf22ijsXsDNJT",
            "MNbqIW816lyx8Ap4bQqjF2uCmgKxZNO5",
            "t7ayni7P3QI0GyzYRCbLngO6Xyu8FyNH",
            "GRur87ASOrldaImYhgK1Pc8kGqPmcloc",
            "JdAPm2RKvxaoG9PgUti2bqY4rvlUQEBB",
            "451l7wMMtvopDVfwD8EPTLNvdo85NcpL",
            "rKpaDB3WmAERETNxzcsppaTqHssnwmzK",
            "3UyJ8TNOQtbh9d5iVd1jmuCSK11ct2aL",
            "Kds07t2sJpozZTB15M90QlEeNvyAzqrx",
            "cHKUccIi3WVdNZl3raUoEZ9VfKz7PDhA",
            "txqysW7PmqAuEbka8exlXLtys1EoNs5T",
            "7WrnasH9fR8WF25FCTQDzqtuGq3G0jPs",
            "bt4c5aReV85IRYmboCsCeUl2oiljY47z",
            "3EItMz2UROUNu6Ooc7g6S2hLVOcbnLfU",
            "3GvYaL4hRiS3eMFQ0qeQQGt1iBNNjgW2",
            "rakJQxo6Ndia6Bk4UMRVYYKnYMFJg8Rc",
            "aYJYTrJRuTBp1R8hPbxzbOX3iy7NGBLo",
            "HoHhSZ6gq0czHyfSlF924IwIpptu8FRA",
            "D0BDLdWwnrJB0GTWTAiKBW4Od3hv7QJS",
            "QGZXxXOmy4y9b3k3nUdOngwxvHHQdsoF",
            "er6Aqm5PHrKOh9x1SEO8m7f4Ylm7wpo9",
            "xSm3WEH6l67m7lgGDASqUy8xmAzujrvM",
            "kNilPJ2CU1gr7j9BpAZ8dHm2Q1Nb6Arz",
            "u33XpphkmgPRfNgYvVV3Xj1aPywF8SZn",
            "UV68ZMot7Bq3rUhJMjnGs4B6nQpD7Uu5",
            "s5w4AtGrqseBQccWcyy7jpehLegjRTBl",
            "R7ecOByK2pNWq7uNrBv8N43HmzHC0X92",
            "nqEwDodahtYG2ILIB0kTutRdljsQ9Nvb",
            "sP7M67oiW53ZcNjTHEJo10noysaaMS8F",
            "tsKQr8vNAqE6S4psFOVMIja6DCz345FO",
            "TKwdyyyUHSQUiwVSHYoukr1NcROIyFlz",
            "pKWuMMXvBHX7znmdnGqTimx8uEI63eCj",
            "XS7v98nRdA4yQ50PwWKufYHMoLiSGZ2F",
            "DxHapGIAZRn5RXI5EnBAf6mQJ93kJtwY",
            "x6aAbapvDha2vtgw7Fk5D8hKoqQYEnmT",
            "bnURhgLsAHTaC66tfUCvenKqXJiwcBjc",
            "NvDw560ran3IxT7em44NBR5JuhaTKTIL"
        ],
        timer: 0,
        currentHashURL: "qr",
        type: "entry",
        selectObjectCode: "27",
    },
    reducers: {
        setTimer(state,action){
          state.timer = action.payload;
        },
        setType(state,action){
          state.type = action.payload;
        },
        setSelectObject(state,action){
            state.selectObjectCode = action.payload;
        },
        timerDecrement(state,action) {
            
            if(state.timer <= 0) {
                let getTime = () =>{
                        let currentTime = new Date();
                        let currentHours = currentTime.getHours();
                        let currentMinutes = currentTime.getMinutes();
                        let currentSeconds = currentTime.getSeconds();
                        let currentTotalSeconds = currentHours*3600 + currentMinutes*60 + currentSeconds;
                        let currentPeriod = Math.floor((currentHours*60 + currentMinutes)/10);
                        return [currentTotalSeconds,currentPeriod];
                    }
    
                let getTimeLeft = (period, currentTotalSeconds) => {
                    let maxPeriodTime = (period + 1)*60*10; //seconds
                    let timeLeft = maxPeriodTime - currentTotalSeconds;
                    return timeLeft;
                }
            
                let [currentTotalSeconds,currentPeriod] = getTime();
                let totalTime = getTimeLeft(currentPeriod,currentTotalSeconds);
                state.timer = totalTime;
                let hash = state.hash_array[currentPeriod];
                // state.currentHashURL = `https://qr.st-ing.com/test/${state.selectObjectCode}/${hash}?action=${state.type}`;
                state.currentHashURL = `https://qr.st-ing.com/${state.selectObjectCode}/${hash}?action=${state.type}`;
            }else{
                state.timer = state.timer-1;
            }
        }
    },
  })

  export const {setTimer, getTimeLeft, timerDecrement, setType, setSelectObject } = timerSlice.actions
  export default timerSlice.reducer