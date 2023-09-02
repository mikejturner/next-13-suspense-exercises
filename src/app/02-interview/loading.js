import React from 'react';

import { getComments } from '@/helpers/interview-helpers';
import Comment from '@/components/Comment';
import Article from '@/app/02-interview/components/Article';
import Spinner from '@/components/Spinner/Spinner';
import Discussion from '@/app/02-interview/components/Discussion';

export const dynamic = 'force-dynamic';

async function InterviewLoading() {
  return (
    <>
      <Article />

      <Discussion>
        <Spinner />
      </Discussion>
    </>
  );
}

export default InterviewLoading;
