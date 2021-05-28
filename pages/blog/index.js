import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables';
import PostCreateModal from '../../components/blog/PostCreateModal'
import { useState } from 'react';

export default function Home({ mobileNav }) {
  const [createModelActive, setCreateModalActive] = useState(false);
  const [textEditorLoading, setTextEditorLoading] = useState(true)
  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <Layout mobileNav={mobileNav} PostCreateModal={PostCreateModal} modalProps={{ createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading }}>
        <div className="ui container">
        <button className={`negative ui button ${textEditorLoading && "loading"}`}  onClick={() => setCreateModalActive(true)}>Create Post</button>
          <h1>Post List</h1>
        </div>
      </Layout>
    </>
  )
}
