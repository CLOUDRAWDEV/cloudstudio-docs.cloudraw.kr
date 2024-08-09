export const kubernetesRules =[
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "liveness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "readiness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Resources > Limits",
        "type": "로깅 모니터링",
        "description": "자원 할당 한계값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Resources > Requests",
        "type": "로깅 모니터링",
        "description": "자원 할당 요청값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Pod Security Context, Containers > Container Security Context",
        "type": "접근 통제",
        "description": "접근 제어 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Pod Security Context, Pod Security Context > Run As User",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Pod Security Context, Pod Security Context > Run As Non Root",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Container Security Context, Containers > Container Security Context > Run As User",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Container Security Context, Containers > Container Security Context > Run As Non Root",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Env > Value From Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Env From > Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Apps",
        "resource": "Daemon Set, Deployment",
        "option": "Containers > Image",
        "type": "데이터 보호",
        "description": "다이제스트, 태그 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "liveness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "readiness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Resources > Limits",
        "type": "로깅 모니터링",
        "description": "자원 할당 한계값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Resources > Requests",
        "type": "로깅 모니터링",
        "description": "자원 할당 요청값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Env > Value From Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Env From > Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Apps",
        "resource": "Stateful Set",
        "option": "Containers > Image",
        "type": "데이터 보호",
        "description": "다이제스트, 태그 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Autoscaling",
        "resource": "Horizontal Pod Autoscaler",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Batch",
        "resource": "Cron Job, Job",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Core",
        "resource": "Config Map, Persistent Volume Claim, Secret, Service",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "liveness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Probe",
        "type": "로깅 모니터링",
        "description": "readiness probe 미설정",
        "risk": "medium",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Resources > Limits",
        "type": "로깅 모니터링",
        "description": "자원 할당 한계값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Resources > Requests",
        "type": "로깅 모니터링",
        "description": "자원 할당 요청값 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "6.2.2.",
        "isms": "2.9",
        "evaluation": "5.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Pod Security Context, Containers > Container Security Context",
        "type": "접근 통제",
        "description": "접근 제어 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Pod Security Context, Pod Security Context > Run As User",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Pod Security Context, Pod Security Context > Run As Non Root",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Container Security Context, Containers > Container Security Context > Run As User",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Container Security Context, Containers > Container Security Context > Run As Non Root",
        "type": "접근 통제",
        "description": "루트 사용자 사용",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Env > Value From Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Env From > Type",
        "type": "데이터 보호",
        "description": "secret 환경변수 사용",
        "risk": "critical",
        "iso": "8.1",
        "csap": "9.1.1.",
        "isms": "2.10",
        "evaluation": "8.1.1"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Core",
        "resource": "Pod",
        "option": "Containers > Image",
        "type": "데이터 보호",
        "description": "다이제스트, 태그 미설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Core",
        "resource": "Service Account",
        "option": "Automount Service Account Token",
        "type": "접근 통제",
        "description": "토큰 자동 마운트 설정",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.1.1.",
        "isms": "2.6",
        "evaluation": "7.1.1"
    },
    {
        "category": "Core",
        "resource": "Service Account",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Helm",
        "resource": "Chart",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Networking",
        "resource": "Ingress, Network Policy",
        "option": "Namespace",
        "type": "데이터 보호",
        "description": "default namespace 사용",
        "risk": "medium",
        "iso": "8.1",
        "csap": "12.1.4.",
        "isms": "2.9",
        "evaluation": "10.1.4"
    },
    {
        "category": "Rbac",
        "resource": "Cluster Role",
        "option": "Rule > Rule Type, Rule > Api Groups",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Cluster Role",
        "option": "Rule > Rule Type, Rule > Resources",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Cluster Role",
        "option": "Rule > Rule Type, Rule > Verbs",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Cluster Role",
        "option": "Rule > Rule Type, Rule > Verbs",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Cluster Role Binding",
        "option": "Subject, Subject > Kind",
        "type": "접근 통제",
        "description": "기본 service account에 역할 할당",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Role",
        "option": "Rule > Api Groups",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Role",
        "option": "Rule > Resources",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Role",
        "option": "Rule > Verbs",
        "type": "접근 통제",
        "description": "광범위한 권한 설정",
        "risk": "critical",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    },
    {
        "category": "Rbac",
        "resource": "Role Binding",
        "option": "Subject, Subject > Kind",
        "type": "접근 통제",
        "description": "기본 service account에 역할 할당",
        "risk": "high",
        "iso": "8.1",
        "csap": "10.2.1.",
        "isms": "2.5",
        "evaluation": "7.2.2"
    }
]
