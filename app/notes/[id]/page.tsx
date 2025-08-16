import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from '../NoteDetails.client';

interface NoteDetailsProps {
	params: { id: string };
}

export default async function NoteDetails({ params }: NoteDetailsProps) {

	const queryClient = new QueryClient();
	const id = params.id;

	await queryClient.prefetchQuery({
		queryKey: ['note', id],
		queryFn: () => fetchNoteById(id),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NoteDetailsClient />
		</HydrationBoundary>
	)

}