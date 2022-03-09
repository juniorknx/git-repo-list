import { useCallback, useState } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, Title, SubmitButton, Input } from "./styles";
import { api } from '../../services/api';

export function Home() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        async function submit() {
            setLoading(true);
            try {
                const response = await api.get(`/repos/${newRepo}`);

                const data = {
                    data: response.data.full_name,
                }
                console.log(data)
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (err) {
                console.log('Erro na req')
            }finally{
                setLoading(false);
            }

        }

        submit();
    }, [newRepo, repositorios])

    function handleInputChange(e) {
        setNewRepo(e.target.value);
    }

    return (
        <Container>
            <Title>
                <FaGithub size={25} />
                Meus Repositórios
            </Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder='Adicionar Repositorios'
                    value={newRepo}
                    onChange={handleInputChange}
                />

                <SubmitButton type='submit' loading={loading ? 1 : 0}>
                    {loading ? <FaSpinner color='#fff' size={15} /> : <FaPlus color='#fff' size={15} />}   
                </SubmitButton>
            </Form>

        </Container>
    )
}