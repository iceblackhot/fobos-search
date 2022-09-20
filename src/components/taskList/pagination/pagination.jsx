import React from 'react';
import {Pagination, Stack} from '@mui/material';

export const PaginationNav = ({setTask, page, setPage, totalPage, setTotalPage}) => {
  // console.log(totalPage);
  return (
    <div>
      <Stack spacing={2}>
        {!!page && (
          <Pagination
            color="primary"
            size="small"
            sx={{padding: '3px  0', marginX: 'auto'}}
            count={totalPage}
            page={page}
            onChange={(_, num) => {
              setPage(num);
            }}
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
    </div>
  );
};
