'use client';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DlButton } from '@alicorpdigital/dali-react-button';
import { DlInput } from '@alicorpdigital/dali-react-input';
import { DlSelect } from '@alicorpdigital/dali-react-select';
import { DlDivider } from '@alicorpdigital/dali-react-divider';
import { DlLink } from '@alicorpdigital/dali-react-link'
import { FC, useState } from 'react';
import imageLogin from 'assets/auth/image_login.jpg';

type Props = {}

const formValue = {
  docNumber: '',
  password: ''
}

const LogIn: FC<Props> = () => {
  const router = useRouter();
  const [form, setForm] = useState(formValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<undefined | 'error' | 'success'>(undefined);

  const handleSubmit = () => {
    setLoading(true);
    setStatus(undefined);

    const docNumber = '77777777';
    const password = '77777777';

    setTimeout(() => {
      if (form.docNumber === docNumber && form.password === password) {
        setStatus(undefined);
        sessionStorage.setItem('@auth', '1');
        router.push('/');
      } else {
        setStatus('error');
      }

      setLoading(false);
    }, 3000)
  };


  return (
    <div className={classes.container}>
      <div className={classes.contentLeft}>
        <Image
          objectFit='cover'
          src={imageLogin.src}
          alt='imageLogin'
          fill={true}
        />
      </div>
      <div className={classes.contentRight}>
        <Image src='dali.svg' alt='dali' width={110} height={24} />
        <h3 className={classes.contentRightTitle}>
          Bienvenido
        </h3>
        <div className={classes.contentForm}>
          <div className={classes.contentFormInputs}>
            <DlSelect
              size='lg'
              items={[{ value: 'DNI', label: 'DNI' }]}
              value='DNI'
              label='Tipo de documento'
            />
            <DlInput
              size='lg'
              label='Número de documento'
              value={form.docNumber}
              onChange={e => setForm({ ...form, docNumber: e.target.value })}
              maxLength={8}
              status={status}
              helperText={status && 'Ingrese un documento correcto.'}
            />
            <DlInput
              size='lg'
              type='password'
              label='Contraseña'
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              maxLength={8}
              status={status}
              helperText={status && 'Ingrese una contraseña correcta.'}
            />
          </div>
          <DlButton block variant='highlight' size='lg' onClick={handleSubmit} loading={loading}>
            Ingresar
          </DlButton>
          <DlButton block variant='tertiary'>
            ¿Olvidaste tu contraseña?
          </DlButton>
          <DlDivider />
          <div className={cn('dl-comp-text-xxs', classes.registerNow)}>
            ¿Aún no te has registrado? <DlLink href='http://localhost:3000/iniciar-sesion'>Registrate aquí</DlLink>
          </div>
          <DlDivider />
          <div className={cn('dl-comp-text-nano', classes.consult)}>
            Si tienes alguna consulta puedes enviarnos un correo a <span className='dl-comp-text-nano-bold'>contacto@alicorp.com</span> o escríbenos a nuestro WhatsApp <span className='dl-comp-text-nano-bold'>+51 986736536</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
