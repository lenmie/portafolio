import React from 'react';

export function FrontTitle({ children, style = {} }) {
  return (
    <p
      style={{
        fontSize: '0.7em',
        fontWeight: 'bold',
        color: '#137E7E',
        marginTop: '0.2em',
        marginBottom: '0.2em',
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 'auto',
        flexDirection: 'row',
        ...style
      }}
    >
      {children}
    </p>
  );
}

export function FrontName({ children, style = {} }) {
  return (
    <p
      style={{
        color: '#1e8a8a',
        marginTop: 0,
        fontSize: '3.5em',
        textAlign: 'left',
        marginLeft: '-52px',
        marginRight: 'auto',
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        display: 'flex',
        ...style
      }}
    >
      {children}
    </p>
  );
}
