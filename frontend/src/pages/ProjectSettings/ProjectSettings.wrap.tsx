import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'redux/types';

import { addMemberToProjectRequest, fetchProjectsRequest } from 'redux/entities/projects';
import { getProject } from 'redux/entities/projects/selectors';
import ProjectSettings, { OwnProps } from './ProjectSettings';

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  project: getProject(state, props.match.params.projectId),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchProjectsRequest: (projectId: string) => dispatch(fetchProjectsRequest({ currentProjectId: projectId })),
  addMemberToProject: (projectId: string, userId: string) => dispatch(addMemberToProjectRequest({ projectId, userId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(ProjectSettings));
