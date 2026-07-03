import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"
import Note from "./Note";

const notesAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.completed === b.completed ? 0 : (a.
        completed ? -1 : 1)
})

const initiateState = notesAdapter.getInitialState()


export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getnotes: builder.query({
            query: () => ({
                url: '/notes',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadednotes = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return notesAdapter.setAll(initiateState, loadednotes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Note', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Note', id }))
                    ]
                } else return [{ type: 'Note', id: 'LIST' }]
            }
        }),
        addNote: builder.mutation({
            quey: initialNote => ({
                url: '/notes',
                method: 'POST',
                body: {
                    ...initialNote,
                }
            }),
            invalidatesTags: [
                { type: 'Note', id: "LIST" }
            ]
        }),
        updateNote: builder.mutation({
            query: initialNote => ({
                url: '/notes',
                method: 'PATCH',
                body: {
                    ...initialNote,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Note', id: arg.id }
            ]
        }),
        deleteNote: builder.mutation({
            query: ({ id }) => ({
                url: `/notes`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Note', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetnotesQuery,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation,
} = notesApiSlice

// returns the query result object
export const selectnotesResult = notesApiSlice.endpoints.getnotes.select()

// creates memoized selector
const selectnotesData = createSelector(
    selectnotesResult,
    notesResult => notesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds,
    // Pass in a selector that returns the notes slice of state
} = notesAdapter.getSelectors(state => selectnotesData(state) ?? initiateState)

