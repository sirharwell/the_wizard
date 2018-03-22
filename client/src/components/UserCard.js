import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';

const UserCard = ({ user }) => {
  const { id, name, image, tags = [] } = user;
  return (
    <Card key={id}>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          <List divided horizontal>
            { tags.map( tag =>
                <List.Item key={tag.id}>{tag.name}</List.Item>
              )
            }
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default UserCard;
