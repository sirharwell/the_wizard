import React from 'react';
import { Divider, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getTags } from '../actions/tags';
import TagForm from './TagForm';

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTags())
  }

  render() {
    const { tags } = this.props;

    return (
      <div>
        <TagForm />
        { tags.length > 0 &&
          <div>
            <Header as="h3" textAlign="center">
              Tags
            </Header>
            <List divided horizontal>
              { tags.map( tag =>
                  <List.Item key={tag.id}>
                    <List.Icon
                      name="cancel"
                      style={{ cursor: 'pointer' }}
                    />
                    <List.Content>
                      <List.Header>
                        #{tag.name}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                )
              }
            </List>
            <LikeUsers />
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tags: state.tags }
}

export default connect(mapStateToProps)(Tags);
