/**
 * Digital Ocean account
 */
export interface Account {
    /**
     * The total number of Droplets the
     * current user or team may have at
     * one time.
     */
    dropletLimit: number;

    /**
     * The total number of floating IPs
     * the current user or team may have.
     */
    floatingIpLimit: number;

    /**
     * The total number of volumes the
     * current user or team may have.
     */
    volumeLimit: number;

    /**
     * The email address used by the current
     * user to register for DigitalOcean.
     */
    email: string;

    /**
     * The unique universal identifier for
     * the current user.
     */
    uuid: string;

    /**
     * If true, the user has verified their
     * account via email. False otherwise.
     */
    emailVerified: boolean;

    /**
     * This value is one of "active", "warning"
     * or "locked".
     */
    status: string;

    /**
     * A human-readable message giving more details
     * about the status of the account.
     */
    statusMessage: string;
}
