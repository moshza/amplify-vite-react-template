import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const ChapterTree = (props) => {
  const { chapters, tractate } = props;
  const classes = useStyles();
  const renderMishnayot = (chapter, mishnayot) => {
    return mishnayot
      ? mishnayot.map((mishna) => (
          <Link to={`/talmud/${tractate}/${chapter}/${mishna.mishna}/`}>
            <TreeItem label={mishna.id}></TreeItem>
          </Link>
        ))
      : null;
  };

  const renderChapters = (chapters) => {
    return chapters
      ? chapters.map((chapter) => {
          return (
            <TreeItem nodeId={chapter.id} label={chapter.id}>
              {renderMishnayot(chapter.id, chapter.mishnaiot)}
            </TreeItem>
          );
        })
      : null;
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderChapters(chapters)}
    </TreeView>
  );
};

export default ChapterTree;
