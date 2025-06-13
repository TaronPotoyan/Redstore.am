import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  const nav = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const [commit, setCommit] = useState<string>('');
  const [key, setKey] = useState<string>('');  // key state added
  const [message, setMessage] = useState<string>('');

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (password1 !== commit) {
      setMessage('Գաղտնաբառերը չեն համընկնում։');
      return;
    }

    fetch('http://localhost:3000/client/reset', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password: commit, key }) 
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Սերվերի սխալ');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setMessage('Գաղտնաբառը հաջողությամբ վերականգնվեց։');
        setEmail('');
        setPassword1('');
        setCommit('');
        setKey(''); 
        nav('/login')
      })
      .catch(err => {
        console.error('Error:', err);
        setMessage('Սխալ տեղի ունեցավ։ Խնդրում ենք կրկին փորձել։');
      });
  };

  return (
    <div className="wrapper">
        <div className="container">
        {message && (
            <h3 style={{ color: "red" }}>
            {message}
            </h3>
        )}
        <form onSubmit={handlerSubmit}>
            <label htmlFor="email">
            Էլ․ հասցե․
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Մուտքագրեք ձեր էլ․ հասցեն"
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
                setMessage('');
                }}
                required
            />
            </label>

            <label htmlFor="newPassword">
            Նոր գաղտնաբառ․
            <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Մուտքագրեք նոր գաղտնաբառը"
                value={password1}
                onChange={(e) => {
                setPassword1(e.target.value);
                setMessage('');
                }}
                required
            />
            </label>

            <label htmlFor="confirmPassword">
            Հաստատել գաղտնաբառը․
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Հաստատեք նոր գաղտնաբառը"
                value={commit}
                onChange={(e) => setCommit(e.target.value)}
                required
            />
            </label>

            <label htmlFor="keyInput">
            Գաղտնագիր 
            <input
                type="text"
                id="keyInput"
                name="keyInput"
                placeholder="Մուտքագրեք ձեր ստացած գաղտնագիրը"
                value={key}
                onChange={(e) => {
                setKey(e.target.value);
                setMessage('');
                }}
                required
            />
            </label>

            <button type="submit">Վերակայել</button>
        </form>
        </div>

    </div> 
  );
}
