/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EmptyBoards, EmptyFavorites, EmptySearchBoards } from './empty-state';

interface BoardsListProps {
    orgId: string
    searchQn: {
        search?: string
        favorite?: string
    }
}

function BoardsList({ orgId, searchQn }: BoardsListProps) {
    const boardData: any = [];

    if (!boardData.length && searchQn.search) {
        return (
            <EmptySearchBoards />
        )
    }

    if (!boardData.length && searchQn.favorite) {
        return (
            <EmptyFavorites />
        )
    }

    if (!boardData.length) {
        return (
            <EmptyBoards />
        )
    }

    return (
        <div>

        </div>
    )
}

export default BoardsList