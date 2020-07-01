import * as React from 'react';
import * as System from '~/components/system';

import GLRenderer from '~/components/three/GLRenderer';
import SystemPage from '~/components/system/SystemPage';
import ViewSourceLink from '~/components/system/ViewSourceLink';

export default class SystemPageGlobe extends React.Component {
  render() {
    return (
      <SystemPage title="SDS: Globe" description="..." url="https://fps.onrender.com/system/globe">
        <System.H1>
          Globe <ViewSourceLink file="system/globe.js" />
        </System.H1>
        <br />
        <br />
        <System.P>The Globe component is used to show peers and file transfers on the Filecoin network.</System.P>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Import GLRenderer.</System.P>
        <br />
        <System.CodeBlock>{`import GLRenderer from '~/components/three/GLRenderer';`}</System.CodeBlock>
        <br />
        <System.P>Declare the Globe component.</System.P>
        <br />
        <System.CodeBlock>{`<GLRenderer width={768} height={480} />`}</System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <GLRenderer width={768} height={480} />
      </SystemPage>
    );
  }
}
