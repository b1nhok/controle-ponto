import { NavigationItem, PracticeArea, TeamMember } from './types';
declare class BarristarApp {
    private navigationData;
    private practiceAreasData;
    private teamData;
    constructor();
    private init;
    private setupEventListeners;
    private setupSmoothScrolling;
    private setupNavbarScrollEffect;
    private setupMobileMenu;
    private setupDropdownMenus;
    private setupContactForm;
    private handleContactFormSubmission;
    private showNotification;
    private updateStatistics;
    private animateCounter;
    getNavigationData(): NavigationItem[];
    getPracticeAreas(): PracticeArea[];
    getTeamMembers(): TeamMember[];
}
export default BarristarApp;
//# sourceMappingURL=main.d.ts.map