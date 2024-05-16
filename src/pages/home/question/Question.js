import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Question.css";

function Question() {
  return (
    <>
      <div className="containerQuestion">
        <div className="question">
          <h5>سوالات متداول</h5>
          <h6>سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد</h6>
        </div>
        <Container style={{maxWidth : "800px"}} className="py-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</Accordion.Header>
            <Accordion.Body>
            بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از طریق  اپلیکیشن را تماشا کنید.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>آیا فیلیمو برای خارج از ایران در دسترس است؟</Accordion.Header>
            <Accordion.Body>
            خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟</Accordion.Header>
            <Accordion.Body>
            تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟</Accordion.Header>
            <Accordion.Body>
            رای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار اندروید) برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌ط
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Container>
      </div>
    </>
  );
}

export default Question;
