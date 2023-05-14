import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    accessToken: import.meta.env.VITE_API_KEY,
    space: import.meta.env.VITE_API_SPACE,
    environment: 'master'
})

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async () => {
        setLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'projects' })
            const items = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img }
            })
            setProjects(items)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return { loading, projects }
}
