import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';

const TaskItem = ({ task }) => {
  const { publishedDate, user, tags, title, body, _id } = task;
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {user.username}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {new Date(publishedDate)}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {tags}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
    // <div>
    //   <h2>
    //     <Link to={`/@${user.username}/${_id}`}>{title}</Link>
    //   </h2>
    //   <SubInfo
    //     username={user.username}
    //     publishedDate={new Date(publishedDate)}
    //   />
    //   <p>{tags}</p>>
    //   <p>{body}</p>
    // </div>
  );
};

const TaskPage = ({tasks, loading, error}) => {
  // 에러 발생 시
  if (error) {
    return <Typography>에러가 발생했습니다.</Typography>;
  }

  return (
    <div>
      <Header />
      <ContentWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5" component="div">
              Task
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ position: 'absolute', right: 1, mr: 6, mb: 5 }}>
              <Link to="/task/write">
                <Fab color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link>
            </Box>
          </Grid>
          <br />

          {/* 로딩 중이 아니고, Task 배열이 존재할 때만 보여 줌 */}
          {!loading && tasks && (
            <div>
              {tasks.map((task) => (
                <TaskItem task={task} key={task._id} />
              ))}
            </div>
          )}

          <Grid item xs={12} sm={6}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </ContentWrapper>
    </div>
  );
};

export default TaskPage;
