import person from '../../../assets/images/person.webp'
import './HomePerson.css'

function HomePerson() {
    return (
        <>
            <div className="containerPerson">
                <div className="imgPerson">
                    <img src={person} />
                </div>
                <div className="word">
                    <h3 className='bg'>دنیایی متنوع از فیلم و کارتون‌های کودکانه</h3>
                    <h6 className='bg' style={{marginTop : "30px"}}>ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</h6>
                    <div className="childCreate" style={{marginTop : "30px"}}>فیلیمو کودک بساز</div>
                    <div className="childCreate" style={{marginTop : "30px"}}>تماشای فیلیمو کودک</div>
                </div>
            </div>
        </>
    );
}

export default HomePerson;