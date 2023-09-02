import React from 'react';

import { getComments } from '@/helpers/interview-helpers';
import Comment from '@/components/Comment';
import Article from '@/app/02-interview/components/Article';
import Discussion from '@/app/02-interview/components/Discussion';

export const dynamic = 'force-dynamic';

async function InterviewExercise() {
  const comments = await getComments();

  return (
    <>
      <Article />

      <Discussion>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Discussion>
    </>
  );
}

export default InterviewExercise;
