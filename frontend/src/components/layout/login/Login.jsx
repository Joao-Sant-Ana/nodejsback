import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import axios from 'axios'

export default function Login () {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, username, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }

    return (
        <div className='w-screen h-screen flex items-center'>
            <form onSubmit={handleSubmit} className='w-11/12 md:w-2/4 lg:w-1/4 mx-auto flex p-10 rounded-xl shadow-md flex-col gap-2 bg-blue-500'>
                <Label htmlFor='nome' className='text-white'>Nome: </Label>
                <Input type='text' id='nome' placeholder='Nome...' className='bg-white px-4' onChange={e => setUsername(e.target.value)}/>
                <Label htmlFor='email' className='text-white'>Email: </Label>
                <Input type='email' id='email' placeholder='Email...' className='bg-white px-4' onChange={e => setEmail(e.target.value)}/>
                <Label htmlFor='password' className='text-white'>Senha: </Label>
                <Input type='password' id='password' placeholder='Senha...' className='bg-white px-4' onChange={e => setPassword(e.target.value)}/>
                <Button className='mt-4'>Entrar</Button>
                <Separator className='w-full mt-5'/>
                <Button size='icon' variant='ghost' className='mx-auto'><img src='https://api.iconify.design/mdi:github.svg' alt='Github' className='w-6'/></Button>
            </form>
        </div>
    )
}