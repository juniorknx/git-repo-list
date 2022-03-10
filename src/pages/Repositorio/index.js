import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Repositorio() {
    const [repository, setRepository] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
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
    }, [repositorio])

    return (
        <Container>

        </Container>
    )
}