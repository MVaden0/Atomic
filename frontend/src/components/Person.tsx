import React, {FC, useState, ChangeEvent} from 'react'

interface Props {
    name: string;
    age: number;
    email: string;
}

enum HairColor {
    Blonde = "Your hair is blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow that is so cool",
}

export const Person: FC<Props> = ({name, age, email}) => {
    
    const [country, setCountry] = useState<string | null>(null);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }

    return (
        <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{email}</h1>
          <input placeholder="write down you country..." onChange={handleChange}/>

          {country}
        </div>
    )
}