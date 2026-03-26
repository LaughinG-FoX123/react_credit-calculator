import { useEffect, useState } from "react"



function Calculator() {

    const [stavka, setStavka] = useState(5)
    const [srok, setSrok] = useState(1)
    const [sum, setSum] = useState(0)

    useEffect(() => {

    }, [])

    return (
        <>
            <label htmlFor="">Ставка ЦБ: {stavka}</label>
            <br />
            <input type="range" value={stavka} onInput={ (e) => {setStavka(e.target.value)} } max={100} min={1} step={1}/>
            <br />

            <label htmlFor="">Срок кредита: {srok}</label>
            <br />
            <input type="range" value={srok} onInput={ (e) => {setSrok(e.target.value)} } max={20} min={1} step={1}/>
            <br />

            <label htmlFor="">Сумма кредита: {sum}</label>
            <br />
            <input type="number" value={sum} onInput={ (e) => {setSum(e.target.value)} } max={1000000000} min={100000} step={10000}/>
            <br />

            <ul>
                <li>
                    <h1>Итоговая сумма: {(stavka/100+1)*sum}</h1>
                </li>
                <li>
                    <h1>Ежемесячный платёж: {((stavka/100+1)*sum)/(srok*12)}</h1>
                </li>
                <li>
                    <h1>Переплата: {((stavka/100+1)*sum)-sum}</h1>
                </li>
            </ul>
        </>
    )
}

export default Calculator