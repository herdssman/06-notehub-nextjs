import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
    const search = '';
    const page = 1;
    const perPage = 15;
    const sortBy = 'created'

    const { notes, totalPages } = await fetchNotes({
        search,
        page, 
        perPage,
        sortBy,
    })

    return (
        <NotesClient notes={notes} totalPages={totalPages} />
    );
}







