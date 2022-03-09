import { useCallback, useState } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Form, Title, SubmitButton, Input, List, DeleteButton } from "./styles";
import { api } from '../../services/api';
import { toast } from 'react-toastify';

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
                    name: response.data.full_name,
                }

                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (err) {
                toast.error('Repositório não encontrado.');
            } finally {
                setLoading(false);
            }

        }

        submit();
    }, [newRepo, repositorios])

    function handleInputChange(e) {
        setNewRepo(e.target.value);
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);
    }, [repositorios]);

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

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14} />
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <a href="">
                            <FaBars size={18} />
                        </a>
                    </li>
                ))}
            </List>
        </Container>
    )
}