export enum AppInterface {
    // Messages
    IPreMessageSentPrevent = 'IPreMessageSentPrevent',
    IPreMessageSentExtend = 'IPreMessageSentExtend',
    IPreMessageSentModify = 'IPreMessageSentModify',
    IPostMessageSent = 'IPostMessageSent',
    IPreMessageDeletePrevent = 'IPreMessageDeletePrevent',
    IPostMessageDeleted = 'IPostMessageDeleted',
    IPreMessageUpdatedPrevent = 'IPreMessageUpdatedPrevent',
    IPreMessageUpdatedExtend = 'IPreMessageUpdatedExtend',
    IPreMessageUpdatedModify = 'IPreMessageUpdatedModify',
    IPostMessageUpdated = 'IPostMessageUpdated',
    // Rooms
    IPreRoomCreatePrevent = 'IPreRoomCreatePrevent',
    IPreRoomCreateExtend = 'IPreRoomCreateExtend',
    IPreRoomCreateModify = 'IPreRoomCreateModify',
    IPostRoomCreate = 'IPostRoomCreate',
    IPreRoomDeletePrevent = 'IPreRoomDeletePrevent',
    IPostRoomDeleted = 'IPostRoomDeleted',
    IPreRoomUserJoined = 'IPreRoomUserJoined',
    IPostRoomUserJoined = 'IPostRoomUserJoined',
    IPreRoomUserLeave = 'IPreRoomUserLeave',
    IPostRoomUserLeave = 'IPostRoomUserLeave',
    // External Components
    IPostExternalComponentOpened = 'IPostExternalComponentOpened',
    IPostExternalComponentClosed = 'IPostExternalComponentClosed',
    // Blocks
    IUIKitInteractionHandler = 'IUIKitInteractionHandler',
    IUIKitLivechatInteractionHandler = 'IUIKitLivechatInteractionHandler',
    // Livechat
    IPostLivechatRoomStarted = 'IPostLivechatRoomStarted',
    IPostLivechatRoomClosed = 'IPostLivechatRoomClosed',
    /**
     * @deprecated please use the AppMethod.EXECUTE_POST_LIVECHAT_ROOM_CLOSED method
     */
    ILivechatRoomClosedHandler = 'ILivechatRoomClosedHandler',
    IPostLivechatAgentAssigned = 'IPostLivechatAgentAssigned',
    IPostLivechatAgentUnassigned = 'IPostLivechatAgentUnassigned',
    IPostLivechatRoomTransferred = 'IPostLivechatRoomTransferred',
    IPostLivechatGuestSaved = 'IPostLivechatGuestSaved',
    IPostLivechatRoomSaved = 'IPostLivechatRoomSaved',
    // FileUpload
    IPreFileUpload = 'IPreFileUpload',
    // Email
    IPreEmailSent = 'IPreEmailSent',
}
