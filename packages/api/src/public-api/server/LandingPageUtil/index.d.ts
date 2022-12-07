import Node from "../../hidden/javax/jcr/Node";

/**
 * Gets the error page (404) of current site.
 * @return the error page, or null if current site has no such page specified.
 */
export function getErrorPage(): Node;

/**
 * Gets the login page (401) of current site.
 * @return the login page, or null if current site has no such page specified.
 */
export function getLoginPage(): Node;

/**
 * Gets the profile page (information about current/specified user identity) of current site.
 * @return the profile page, or null if current site has no such page specified.
 */
export function getProfilePage(): Node;

/**
 * Gets the contacts page (information about the contacts of current/specified user identity) of current site.
 * @return the contact page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getContactsPage(): Node;

/**
 * Gets the user identity search result page of current site.
 * @return the user identity search result page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getUserIdentitySearchResultPage(): Node;

/**
 * Gets the files page (information about the files of a collaboration group) of current site.
 * @return the files page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getFilesPage(): Node;

/**
 * Gets the collaboration groups page (lists all accessible collaboration groups) of current site.
 * @return the collaboration groups page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getCollaborationGroupsPage(): Node;

/**
 * Gets the members page (lists all members of a specified collaboration group) of current site.
 * @return the members page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getMembersPage(): Node;

/**
 * Gets the tag timeline page (displays the timeline for a specified tag) of current site.
 * @return the tag timeline page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getTagTimelinePage(): Node;

/**
 * Gets the timeline entry page (displays a single timeline entry) of current site.
 * @return the timeline entry page, or null if current site has no such page specified.
 * @since Sitevision 6.0.1
 */
export function getTimelineEntryPage(): Node;

/**
 * Gets the topic timeline page of current site.
 * @return the topic timeline page, or null if current site has no such page specified.
 * @since Sitevision 7.0
 */
export function getTopicTimelinePage(): Node;

/**
 * Utility interface for getting landing pages.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getLandingPageUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.5.1
 */
declare namespace landingPageUtil {
  export {
    getErrorPage,
    getLoginPage,
    getProfilePage,
    getContactsPage,
    getUserIdentitySearchResultPage,
    getFilesPage,
    getCollaborationGroupsPage,
    getMembersPage,
    getTagTimelinePage,
    getTimelineEntryPage,
    getTopicTimelinePage,
  };
}

export default landingPageUtil;
