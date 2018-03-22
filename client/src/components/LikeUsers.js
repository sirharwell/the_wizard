import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Divider,
  List,
  Image
} from 'semantic-ui-react';
import { getLikeUsers } from '../actions/likeUsers';

class LikeUsers extends React.Component {
  componentDidMount() {
    this.reload();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tags !== this.props.tags)
      this.reload()
  }

  reload = () => {
    this.props.dispatch(getLikeUsers())
  }

  render() {
    const { likeUsers } = this.props;
    return (
      <Card.Group itemsPerRow={4}>
        { likeUsers.map( user => {
          const { id, name, image, tags } = user;
          return (
            <Card key={id}>
              <Image src={ image } />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                  <List divided horizontal>
                    { tags.map( tag =>
                    <List.Item key={tag.id}>
                      {tag.name}
                    </List.Item>
                              )
                    }
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          )
          })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    likeUsers: state.likeUsers,
  }
}

export default connect(mapStateToProps)(LikeUsers)
