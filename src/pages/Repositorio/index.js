import { BackButton, Container, IssuesList, Owner, PageActions } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FaArrowLeft, FaLaravel } from 'react-icons/fa';


export function Repositorio() {
    const [repository, setRepository] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const { repositorio } = useParams();

    useEffect(() => {
        async function load() {
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${repositorio}`),
                api.get(`/repos/${repositorio}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5,
                    }
                }),
            ])
            setRepository(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, [])

     //Pagination
     useEffect(() => {
        async function loadIssue() {
            const response = await api.get(`/repos/${repositorio}/issues`, {
                params: {
                    state: 'open',
                    page: page,
                    per_page: 5,
                },
            });

            setIssues(response.data);
        }

        loadIssue();
    }, [repositorio, page]);

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    if (loading) {
        return <h1>Carregando...</h1>
    }

   

    return (
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={35} />
            </BackButton>
            <Owner>
                <img src={repository.owner.avatar_url} alt={repository} />
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
            </Owner>

            <IssuesList>
                {issues.map((issue) => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />

                        <div>
                            <strong>
                                <a href={issue.html_url}>
                                    {issue.title}
                                </a>

                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>
                                        {label.name}
                                    </span>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssuesList>

            <PageActions>
                <button type="button" onClick={() => handlePage('back')} >
                    Voltar
                </button>

                <button type="button" onClick={() => handlePage('next')} >
                    Próxima
                </button>
            </PageActions>
        </Container>
    )
}